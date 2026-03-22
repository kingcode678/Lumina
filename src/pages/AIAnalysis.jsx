import React, { useState, useEffect } from 'react';
import { 
  collection, 
  getDocs, 
  query, 
  orderBy
} from 'firebase/firestore';
import { db } from '../firebase';

const AIAnalysis = ({ userName }) => {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [debugLogs, setDebugLogs] = useState([]);

  const addLog = (msg) => {
    console.log(msg);
    setDebugLogs(prev => [...prev, msg]);
  };

  const loadData = async () => {
    addLog(`🚀 Başladı: ${userName}`);
    
    try {
      // 1. Firestore bağlantısını yoxla
      addLog('1. Firestore yoxlanılır...');
      if (!db) {
        throw new Error('Firestore db yoxdur!');
      }
      addLog('✅ Firestore OK');

      // 2. Kolleksiyanı yoxla
      addLog('2. totalCode kolleksiyası yoxlanılır...');
      const snapshot = await getDocs(collection(db, 'totalCode'));
      addLog(`✅ ${snapshot.size} sənəd tapıldı`);

      // 3. User sənədlərini filterlə
      addLog(`3. ${userName} üçün filterləmə...`);
      const userDocs = [];
      
      snapshot.forEach((doc) => {
        const docId = doc.id;
        addLog(`   Yoxlanılır: ${docId}`);
        
        if (docId.startsWith(`${userName}_`)) {
          addLog(`   ✅ Uyğun gəldi: ${docId}`);
          userDocs.push({ id: docId, ...doc.data() });
        }
      });

      addLog(`✅ ${userDocs.length} sənəd user üçün tapıldı`);

      if (userDocs.length === 0) {
        addLog('⚠️ HEÇ BİR SƏNƏD TAPILMADI!');
        // Boş data göstər
        setUserData({
          userName,
          completedCount: 0,
          totalRuns: 0,
          overallScore: 0,
          topics: []
        });
        setLoading(false);
        return;
      }

      // 4. Mövzuları hazırla
      addLog('4. Mövzular hazırlanır...');
      const topics = userDocs.map(doc => {
        const topicId = parseInt(doc.id.split('_')[1]?.replace('movzu', '')) || 0;
        return {
          topicId,
          topicName: `Mövzu ${topicId}`,
          stats: {
            totalAttempts: doc.totalAttempts || 0,
            successfulAttempts: doc.successfulAttempts || 0,
            failedAttempts: doc.failedAttempts || 0
          }
        };
      });

      // 5. Ümumi statistika
      const totalRuns = topics.reduce((s, t) => s + t.stats.totalAttempts, 0);
      
      addLog(`✅ Hazır: ${topics.length} mövzu, ${totalRuns} cəhd`);

      setUserData({
        userName,
        completedCount: topics.length,
        totalRuns,
        overallScore: 0,
        topics: topics.sort((a, b) => a.topicId - b.topicId)
      });

    } catch (err) {
      addLog(`❌ XƏTA: ${err.message}`);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userName && userName !== 'guest') {
      loadData();
    } else {
      setError('User name yoxdur!');
      setLoading(false);
    }
  }, [userName]);

  if (loading) {
    return (
      <div style={{ padding: '40px', textAlign: 'center', background: '#1e1e1e', borderRadius: '12px', color: '#888' }}>
        <div style={{ fontSize: '32px', marginBottom: '16px' }}>⏳</div>
        <div>Analiz hazırlanır...</div>
        
        {/* DEBUG PANEL */}
        <div style={{ 
          marginTop: '20px', 
          textAlign: 'left', 
          background: '#000', 
          padding: '12px', 
          borderRadius: '8px',
          maxHeight: '200px',
          overflow: 'auto',
          fontSize: '11px',
          fontFamily: 'monospace'
        }}>
          <div style={{ color: '#666', marginBottom: '8px' }}>🔍 Debug Loqları:</div>
          {debugLogs.map((log, i) => (
            <div key={i} style={{ 
              color: log.includes('❌') ? '#ff6b6b' : log.includes('✅') ? '#4ade80' : '#0f0',
              marginBottom: '2px'
            }}>
              {log}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: '40px', textAlign: 'center', color: '#ff6b6b', background: '#2a1a1a', borderRadius: '12px' }}>
        <div style={{ fontSize: '32px', marginBottom: '12px' }}>⚠️</div>
        <div>{error}</div>
        <button onClick={loadData} style={{ marginTop: '16px', padding: '10px 20px', background: '#4a9eff', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
          🔄 Yenidən cəhd et
        </button>
      </div>
    );
  }

  // Sadə nəticə göstərişi
  return (
    <div style={{ background: '#1e1e1e', borderRadius: '12px', padding: '24px', color: '#fff' }}>
      <h2>📊 {userName} - Analiz Nəticəsi</h2>
      
      {userData && (
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', margin: '20px 0' }}>
            <div style={{ background: '#2a2a2a', padding: '20px', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '32px', color: '#4a9eff' }}>{userData.completedCount}</div>
              <div style={{ color: '#888', fontSize: '12px' }}>Mövzu sayı</div>
            </div>
            <div style={{ background: '#2a2a2a', padding: '20px', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '32px', color: '#4ade80' }}>{userData.totalRuns}</div>
              <div style={{ color: '#888', fontSize: '12px' }}>Ümumi run</div>
            </div>
            <div style={{ background: '#2a2a2a', padding: '20px', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '32px', color: '#facc15' }}>{userData.overallScore}%</div>
              <div style={{ color: '#888', fontSize: '12px' }}>Orta bal</div>
            </div>
          </div>

          <h3 style={{ color: '#888', marginBottom: '12px' }}>Mövzular:</h3>
          {userData.topics.map(t => (
            <div key={t.topicId} style={{ 
              background: '#2a2a2a', 
              padding: '12px', 
              marginBottom: '8px', 
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <span>Mövzu {t.topicId}</span>
              <span style={{ color: '#888' }}>
                {t.stats.totalAttempts} cəhd | {t.stats.successfulAttempts} uğur
              </span>
            </div>
          ))}
        </div>
      )}

      <button onClick={loadData} style={{ marginTop: '20px', padding: '12px 24px', background: '#4a9eff', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', width: '100%' }}>
        🔄 Yenilə
      </button>
    </div>
  );
};

export default AIAnalysis;