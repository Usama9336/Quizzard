import React from 'react'
import pic from './logo512.png'

export default function () {
  return (
    <div>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f5f5f5',
      fontFamily: 'sans-serif'
    }}>
      <div style={{
        textAlign: 'center',
        marginBottom: '50px'
      }}>
        <p>Loved across 150+ Countries</p>
        <h1>Trusted by teachers in 90% of U.S. schools</h1>
        <button style={{
          backgroundColor: '#9966cc',
          color: '#ffffff',
          padding: '15px 30px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
          transition: 'background-color 0.3s ease'
        }} onMouseOver={(e) => e.target.style.backgroundColor = '#774499'} onMouseOut={(e) => e.target.style.backgroundColor = '#9966cc'}>
          Quizizz for schools and districts &gt;
        </button>
      </div>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px'
      }}>
        <img src={pic} alt="Houston Independent School District" style={{
          width: '100px',
          height: '100px'
        }} />
        <img src={pic} alt="Bladen County Schools" style={{
          width: '100px',
          height: '100px'
        }} />
        <img src={pic} alt="Donna ISD" style={{
          width: '100px',
          height: '100px'
        }} />
        <img src={pic} alt="Oxnard Union High School District" style={{
          width: '100px',
          height: '100px'
        }} />
        <img src={pic} alt="FWCS" style={{
          width: '100px',
          height: '100px'
        }} />
        <img src={pic} alt="Decatur ISD" style={{
          width: '100px',
          height: '100px'
        }} />
        <img src={pic} alt="Moose" style={{
          width: '100px',
          height: '100px'
        }} />
        <img src={pic} alt="Kp" style={{
          width: '100px',
          height: '100px'
        }} />
      </div>
    </div>
    </div>
  )
}
