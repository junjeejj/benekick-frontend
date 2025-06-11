import React, { useEffect, useState } from 'react';

export default function ApiTest() {
  const [msg, setMsg] = useState('로딩 중…');
  useEffect(() => {
    fetch('https://benekick-proxy-v2.onrender.com/')
      .then(res => res.text())
      .then(text => setMsg(text))
      .catch(() => setMsg('서버 연결 실패'))
  }, []);
  return <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
    <h2>API 연결 테스트</h2>
    <p>{msg}</p>
  </div>;
}
