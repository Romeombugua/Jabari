import { useState } from 'react'
import HLSVideoPlayer from './components/HLSVideoPlayer'
import { Camera, Wifi, Settings, Monitor } from 'lucide-react'
import './App.css'

function App() {
  const [streamUrl, setStreamUrl] = useState('http://localhost:8080/hls/stream.m3u8')
  const [isConnected, setIsConnected] = useState(false)
  const [showSettings, setShowSettings] = useState(false)

  const handleConnect = () => {
    setIsConnected(!isConnected)
  }

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="header-title">
            <h1>Jabari</h1>
          </div>
          
          <div className="header-controls">
            <div className={`connection-status ${isConnected ? 'connected' : 'disconnected'}`}>
              <Wifi size={20} />
              <span>
                {isConnected ? 'Connected' : 'Disconnected'}
              </span>
            </div>
            
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="settings-button"
            >
              <Settings size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Settings Panel */}
        {showSettings && (
          <div className="settings-panel">
            <h2>Stream Settings</h2>
            <div className="settings-form">
              <div className="form-group">
                <label>Stream URL</label>
                <input
                  type="text"
                  value={streamUrl}
                  onChange={(e) => setStreamUrl(e.target.value)}
                  placeholder="Enter HLS stream URL"
                />
              </div>
              
              <div className="form-actions">
                <button
                  onClick={handleConnect}
                  className={`connect-button ${isConnected ? 'connected' : 'disconnected'}`}
                >
                  {isConnected ? 'Disconnect' : 'Connect'}
                </button>
                
                <div className="form-info">
                  Raspberry Pi Camera Stream
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Video Player */}
        <div className="video-section">
          <div className="video-header">
            <h2 className="video-title">
              <Monitor size={20} />
              Live Stream
            </h2>
            <div className="video-status">
              {isConnected ? 'Streaming from Raspberry Pi' : 'Stream offline'}
            </div>
          </div>
          
          <div className="video-container">
            {isConnected ? (
              <HLSVideoPlayer 
                src={streamUrl}
                autoPlay={true}
                controls={true}
                className="w-full h-full"
              />
            ) : (
              <div className="video-placeholder">
                <div>
                  <Camera size={64} />
                  <h3>Stream not connected</h3>
                  <p>Click Connect to start streaming</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Stream Info */}
        <div className="info-grid">
          <div className="info-card">
            <h3>Stream Quality</h3>
            <div className="info-list">
              <div className="info-item">
                <span>Resolution:</span>
                <span className="value">1920x1080</span>
              </div>
              <div className="info-item">
                <span>Frame Rate:</span>
                <span className="value">30 FPS</span>
              </div>
              <div className="info-item">
                <span>Bitrate:</span>
                <span className="value">2.5 Mbps</span>
              </div>
            </div>
          </div>

          <div className="info-card">
            <h3>Connection</h3>
            <div className="info-list">
              <div className="info-item">
                <span>Latency:</span>
                <span className="value">~3s</span>
              </div>
              <div className="info-item">
                <span>Protocol:</span>
                <span className="value">HLS</span>
              </div>
              <div className="info-item">
                <span>Status:</span>
                <span className={`value ${isConnected ? 'active' : 'inactive'}`}>
                  {isConnected ? 'Active' : 'Inactive'}
                </span>
              </div>
            </div>
          </div>

          <div className="info-card">
            <h3>Device Info</h3>
            <div className="info-list">
              <div className="info-item">
                <span>Device:</span>
                <span className="value">Raspberry Pi 2</span>
              </div>
              <div className="info-item">
                <span>Camera:</span>
                <span className="value">Pi Camera v2</span>
              </div>
              <div className="info-item">
                <span>Uptime:</span>
                <span className="value">2h 15m</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
