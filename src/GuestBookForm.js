import React, { useState } from 'react';
import { useTranslation } from "react-i18next";

function GuestBookForm({ addEntry }) {

  const { t } = useTranslation();

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
      <h2>{t("titleMessage")}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>{t("writer")}</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">{t("password")}</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="content">{t("content")}</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            maxLength={100} // 100자 이내로 제한
            required
          />
        </div>
        <button type="submit">{t("submit")}</button>
      </form>
    </div>
  );
}

export default GuestBookForm;