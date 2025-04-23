import { useState } from 'react';
import { Typography, Card, Switch } from 'antd';
import Component2 from './Components/component2';
import Greeting from './Components/Greeting';
import UserContext from './Hook/AppContext';
import { useTheme } from './Components/Theme';
import AppContext from './Hook/AppContext';

const AppContent = () => {
  const user = 'Sonam';
  const [language, setLanguage] = useState('en');
  const { darkMood, toggleTheme } = useTheme()

  const translations = {
    en: 'Hello',
    es: 'Hola',
    fr: 'Bonjour',
  };

  
  return (
  
      <UserContext.Provider value={{ user, language, setLanguage, translations }}>
        <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
          <Card
            style={{
              width: '100%',
              maxWidth: 600,
              backgroundColor: '#ffd666',
              borderRadius: '12px',
              boxShadow: '0 4px 14px rgba(0,0,0,0.1)',
              padding: '2rem',
            }}
          >
            <Typography.Title level={1}>
              {`${translations[language]} ${user}`}
            </Typography.Title>

            <div style={{ marginTop: '1rem' }}>
              <Switch
                checked={language === 'es'}
                onChange={toggleLanguage}
                checkedChildren="ES"
                unCheckedChildren="EN"
              />
            </div>

            <Component2 />
            <Greeting />
            {/* Add other components here */}
          </Card>
        </div>
      </UserContext.Provider>
    
  );
};

  
export default App

