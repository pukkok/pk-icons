import { useState } from 'react'
import { activeIcons, directionalIcons, basicIcons } from './iconList'

const ICON_SIZE = 28

const App = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div style={{ padding: 16 }}>
      <section>
        <div style={{ display: 'flex', alignItems: 'end', gap: '8px', marginBottom: 12 }}>
          <h2 style={{ margin: 0 }}>Active 아이콘</h2>
          <button
            onClick={() => setIsActive(prev => !prev)}
            style={{
              padding: '4px 10px',
              fontSize: 12,
              width: '50px',
              border: '1px solid #ccc',
              borderRadius: 4,
              background: isActive ? '#10B981' : '#f3f3f3',
              color: isActive ? 'white' : '#333',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            {isActive ? 'ON' : 'OFF'}
          </button>
        </div>

        <div style={{ display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap' }}>
          {activeIcons.map(({ name, Component }) => (
            <div key={name} style={{ textAlign: 'center' }}>
              <Component size={ICON_SIZE} isActive={isActive} />
              <div style={{ fontSize: 12 }}>{name}</div>
            </div>
          ))}
        </div>
      </section>

      <hr style={{margin: '20px 0'}}/>

      <section>
        <h2>Directional 아이콘</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
          {directionalIcons.map(({ name, Component, directions }) => (
            <div
              key={name}
              style={{
                minWidth: 160,
                padding: 12,
                border: '1px solid #ddd',
                borderRadius: 8,
                textAlign: 'center',
                flex: '0 0 auto',
              }}
            >
              <div style={{ marginBottom: 8, fontWeight: 'bold', fontSize: 16 }}>{name}</div>
              <div
                style={{
                  display: 'flex',
                  columnGap: 20,
                  justifyContent: 'center',
                }}
              >
                {directions.map(d => (
                  <div key={d} style={{ textAlign: 'center' }}>
                    <Component size={ICON_SIZE} direction={d} />
                    <div style={{ fontSize: 12, marginTop: 2 }}>{d}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr style={{margin: '20px 0'}}/>

      <section>
        <h2>Basic 아이콘</h2>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          {basicIcons.map(({ name, Component }) => (
            <div key={name} style={{ textAlign: 'center' }}>
              <Component size={ICON_SIZE} />
              <div style={{ fontSize: 12 }}>{name}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default App
