import React from 'react'

export default function () {
  return (
    <div>
<div style={{
    display: 'flex',
    justifyContent: 'space-between',
    padding: '50px',
    height:'100vh'
  }}>
    <div style={{
      maxWidth: '500px'
    }}>
      <h1 style={{
        fontSize: '32px',
        fontWeight: 'bold',
        marginBottom: '20px'
      }}>FAST</h1>
      <h2 style={{
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px'
      }}>Teaching, minus the<br />time with Quizizz AI</h2>
      <ul style={{
        listStyleType: 'disc',
        marginLeft: '20px',
        padding: '0'
      }}>
        <li style={{
          marginBottom: '10px'
        }}>Generate activities in seconds from your favorite educational websites, PDFs, and docs with the Chrome Extension</li>
        <li style={{
          marginBottom: '10px'
        }}>Increase efficiency and digitize content you already have, images and all with AI worksheets to activities</li>
        <li style={{
          marginBottom: '10px'
        }}>Create the right reading material, right now with AI-generated comprehension passages</li>
      </ul>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginTop: '40px'
      }}>
        <span style={{
          fontSize: '48px',
          fontWeight: 'bold',
          marginRight: '10px'
        }}>93%</span>
        <span style={{
          fontSize: '18px'
        }}>of teachers say they can easily and quickly personalize content on Quizizz.</span>
      </div>
      <button style={{
        backgroundColor: '#663399',
        color: '#fff',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '40px'
      }}>Learn more &gt;</button>
    </div>
    <div style={{
      maxWidth: '500px'
    }}>
      <div style={{
        backgroundColor: '#e0f2ff',
        borderRadius: '10px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        padding: '20px'
      }}>
        <div style={{
          backgroundColor: '#336699',
          height: '10px',
          borderRadius: '10px 10px 0 0'
        }}></div>
        <div style={{
          padding: '20px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px'
          }}>
            <span style={{
              fontSize: '18px',
              fontWeight: 'bold',
              marginRight: '10px'
            }}>Q7.</span>
            <div style={{
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '10px'
              }}>
                <input type="radio" name="q7" />
                <label htmlFor="q7" style={{
                  fontSize: '14px'
                }}></label>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '10px'
              }}>
                <input type="radio" name="q7" />
                <label htmlFor="q7" style={{
                  fontSize: '14px'
                }}></label>
              </div>
            </div>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px'
          }}>
            <span style={{
              fontSize: '18px',
              fontWeight: 'bold',
              marginRight: '10px'
            }}>Q8.</span>
            <span style={{
              fontSize: '16px'
            }}>Which organelle performs photosynthesis?</span>
            <div style={{
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '10px'
              }}>
                <input type="radio" name="q8" />
                <label htmlFor="q8" style={{
                  fontSize: '14px'
                }}></label>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '10px'
              }}>
                <input type="radio" name="q8" />
                <label htmlFor="q8" style={{
                  fontSize: '14px'
                }}></label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

    </div>
  )
}
