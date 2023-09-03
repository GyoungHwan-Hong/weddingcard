// Import the functions you need from the SDKs you need
import './GuestBook.css'
import React, { useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, getDocs, getFirestore, addDoc, doc, deleteDoc } from "firebase/firestore";
import GuestBookForm from './GuestBookForm';
import Modal from 'react-modal';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const analytics = getAnalytics(app);
const querySnapshot = await getDocs(collection(db, "GuestBook"));


Modal.setAppElement('#root');

function GuestBook() {
    const [guestbookEntries, setGuestbookEntries] = useState([]);
    const [passwordToDelete, setPasswordToDelete] = useState('');
    const [entryToDelete, setEntryToDelete] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false); // 모달 상태 추가
    const [entries, setEntries] = useState([]);


    // Get a list of messages from firestore
    const fetchData = async () => {
        try {
            const entries = [];
            querySnapshot.forEach((doc) => {
                entries.push({ id: doc.id, ...doc.data() });
            });
            setGuestbookEntries(entries);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };
    
    
    useEffect(() => {
        fetchData();
    }, [entries]);


    const addEntry = async (entry) => {
        try {
            await addDoc(collection(db, "GuestBook"), entry);
            console.log('글이 성공적으로 추가되었습니다.');
            // 글을 성공적으로 추가한 후 방명록 목록을 다시 불러옴
            fetchData();
        } catch (error) {
            console.error('Error adding entry: ', error);
        }
    };

    const confirmDelete = (entry) => {
        setEntryToDelete(entry);
        setModalIsOpen(true); // 모달 열기
    };

    const cancelDelete = () => {
        setEntryToDelete(null);
        setPasswordToDelete('');
        setModalIsOpen(false); // 모달 닫기
    };

    const deleteEntry = async () => {
        try {
            if (entryToDelete && entryToDelete.password === passwordToDelete) {
                await deleteDoc(doc(db, "GuestBook", entryToDelete.id));
                console.log('글이 성공적으로 삭제되었습니다.');
                // 글을 성공적으로 삭제한 후 방명록 목록을 다시 불러옴
                fetchData();
                setEntryToDelete('');
                setPasswordToDelete('');
                setModalIsOpen(false); // 모달 닫기
            } else {
                alert('비밀번호가 일치하지 않습니다.');
            }
        } catch (error) {
            console.error('Error deleting entry: ', error);
        }
    };

    return (
        <div className="GuestBook">
            <GuestBookForm addEntry={addEntry} />
            <h2>축하 메세지</h2>
            <ul>
                {guestbookEntries.map((entry, index) => (
                    <li key={entry.id}>
                        <div className="GuestMessage">
                        <strong style={{ margin: '3px'}}> {entry.name} </strong> 
                        <span>{entry.content}</span>
                        <button className="deleteButton" onClick={() => confirmDelete(entry)}>지우기</button>
                        </div>
                    </li>
                ))}
            </ul>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={cancelDelete}
                contentLabel="삭제 확인 모달"
                appElement={document.getElementById('root')} // 모달의 appElement 설정
            >
                <h2>비밀번호 확인</h2>
                <input
                    type="password"
                    placeholder="비밀번호 입력"
                    value={passwordToDelete}
                    onChange={(e) => setPasswordToDelete(e.target.value)}
                />
                <button onClick={deleteEntry}>확인</button>
                <button onClick={cancelDelete}>취소</button>
            </Modal>
        </div>
    );
}

export default GuestBook