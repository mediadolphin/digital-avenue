// scaled-frame.jsx — wraps a device frame with auto-scale to fit viewport.
// Renders an iframe (the actual page content) inside the frame.

// ── Tablet bezel (rectangular, slim — generic iPad-style) ──
function TabletFrame({ width = 820, height = 1180, children, dark = false }) {
  const bezelW = 22;
  return (
    <div style={{
      width, height,
      borderRadius: 36,
      padding: bezelW,
      background: dark ? '#0a0a0c' : '#1c1d20',
      boxShadow: '0 40px 100px rgba(0,0,0,0.25), 0 0 0 1px rgba(0,0,0,0.18)',
      boxSizing: 'border-box',
      position: 'relative',
    }}>
      <div style={{
        width: '100%', height: '100%',
        borderRadius: 18,
        overflow: 'hidden',
        background: '#fff',
      }}>
        {children}
      </div>
      {/* tiny camera dot at top */}
      <div style={{
        position: 'absolute', top: 10, left: '50%', transform: 'translateX(-50%)',
        width: 6, height: 6, borderRadius: '50%',
        background: '#3a3b3e',
      }} />
    </div>
  );
}

// ── Phone bezel (iPhone-style with notch+home indicator, no chrome) ──
function PhoneFrame({ width = 390, height = 844, children }) {
  const bezelW = 12;
  return (
    <div style={{
      width, height,
      borderRadius: 54,
      padding: bezelW,
      background: '#0a0a0c',
      boxShadow: '0 40px 90px rgba(0,0,0,0.32), 0 0 0 1.5px rgba(255,255,255,0.06) inset, 0 0 0 1px rgba(0,0,0,0.4)',
      boxSizing: 'border-box',
      position: 'relative',
    }}>
      <div style={{
        width: '100%', height: '100%',
        borderRadius: 42,
        overflow: 'hidden',
        background: '#fff',
        position: 'relative',
      }}>
        {children}
        {/* dynamic island (decorative, on top) */}
        <div style={{
          position: 'absolute', top: 11, left: '50%', transform: 'translateX(-50%)',
          width: 110, height: 32, borderRadius: 22, background: '#0a0a0c',
          zIndex: 50, pointerEvents: 'none',
        }} />
        {/* home indicator */}
        <div style={{
          position: 'absolute', bottom: 8, left: '50%', transform: 'translateX(-50%)',
          width: 130, height: 4.5, borderRadius: 100,
          background: 'rgba(0,0,0,0.32)', zIndex: 50, pointerEvents: 'none',
        }} />
      </div>
    </div>
  );
}

// ── A scaled stage that sizes a frame to fit the viewport ──
function FrameStage({ frameW, frameH, padding = 32, children }) {
  const [scale, setScale] = React.useState(1);
  React.useEffect(() => {
    const calc = () => {
      const availW = window.innerWidth - padding * 2;
      const availH = window.innerHeight - padding * 2;
      const s = Math.min(availW / frameW, availH / frameH, 1);
      setScale(s);
    };
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, [frameW, frameH, padding]);

  return (
    <div style={{
      minHeight: '100vh', width: '100%',
      background: 'linear-gradient(180deg, #f2efe9 0%, #e6e0d3 100%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding,
      boxSizing: 'border-box',
      overflow: 'hidden',
    }}>
      <div style={{
        width: frameW, height: frameH,
        transform: `scale(${scale})`,
        transformOrigin: 'center center',
        flexShrink: 0,
      }}>
        {children}
      </div>
    </div>
  );
}

// ── Render an iframe at native device width inside whatever frame is provided ──
function PageInFrame({ src, viewportW, viewportH }) {
  return (
    <iframe
      src={src}
      title="Preview"
      style={{
        width: viewportW, height: viewportH,
        border: 'none', display: 'block',
        background: '#fff',
      }}
    />
  );
}

// ── Subtle device-label badge in corner ──
function FrameLabel({ label, sub }) {
  return (
    <div style={{
      position: 'fixed', top: 16, left: 16, zIndex: 10,
      background: 'rgba(255,255,255,0.85)',
      backdropFilter: 'blur(12px) saturate(160%)',
      WebkitBackdropFilter: 'blur(12px) saturate(160%)',
      border: '1px solid rgba(0,0,0,0.08)',
      borderRadius: 100,
      padding: '8px 16px',
      fontFamily: '"Hanken Grotesk", system-ui, sans-serif',
      fontSize: 12, fontWeight: 600,
      color: '#1a2326', letterSpacing: '0.02em',
      display: 'flex', alignItems: 'center', gap: 10,
      boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
    }}>
      <span style={{
        width: 6, height: 6, borderRadius: '50%',
        background: '#306b75',
      }} />
      <strong>{label}</strong>
      {sub && <span style={{ color: '#5c6f74', fontWeight: 500 }}>· {sub}</span>}
    </div>
  );
}

Object.assign(window, {
  TabletFrame, PhoneFrame, FrameStage, PageInFrame, FrameLabel,
});
