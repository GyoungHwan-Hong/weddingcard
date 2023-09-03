import React, { useState } from 'react';

function GuestBookForm({ addEntry }) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Firebase Firestore에 데이터 추가
    addEntry({ name, password, content });
    // 입력 필드 초기화
    setName('');
    setPassword('');
    setContent('');
  };

  return (
    <div style={{ width: '100%'}}>
      <h2>축하 메세지 작성하기</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>성함</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호 (지울 경우 필요)</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="content">축하 메세지 (100자 이내)</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            maxLength={100} // 100자 이내로 제한
            required
          />
        </div>
        <button type="submit">글 등록</button>
      </form>
    </div>
  );
}

export default GuestBookForm;