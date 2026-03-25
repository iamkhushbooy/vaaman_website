export default function Maintenance() {
  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        padding: '1rem',
        boxSizing: 'border-box',
        backgroundColor: '#ffffff',
        backgroundImage: "url('/logo.jpeg')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
      }}
    >
      <p
        style={{
          margin: 0,
          fontSize: '64px',
          fontWeight: 700,
          textAlign: 'center',
          lineHeight: 1.2,
          backgroundColor: 'rgba(255, 255, 255, 0.88)',
          padding: '0.35em 0.65em',
          borderRadius: '12px',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
        }}
      >
        Under maintenance
      </p>
    </div>
  );
}
