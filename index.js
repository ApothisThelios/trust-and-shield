export default function Home() {
  return (
    <div style={{ backgroundColor: 'black', color: 'white', padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Trust and Shield</h1>
        <p style={{ fontStyle: 'italic', fontSize: '1.25rem', color: '#ccc' }}>Protect your income. Access funding. Move in silence.</p>
        <div style={{ backgroundColor: 'white', color: 'black', padding: '2rem', borderRadius: '20px', margin: '2rem 0' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600' }}>$97 Strategy Call</h2>
          <ul style={{ textAlign: 'left', marginTop: '1rem', lineHeight: '1.75' }}>
            <li>Shield your income from lawsuits, garnishment, or court drama</li>
            <li>Avoid probate and pass assets directly to your heirs</li>
            <li>Access $10K–$50K in business funding—even with bad credit</li>
            <li>Control your wealth invisibly, the way the wealthy do</li>
          </ul>
          <a
            href="https://your-stripe-checkout-link.com"
            style={{ display: 'inline-block', marginTop: '1rem', padding: '1rem 2rem', backgroundColor: 'black', color: 'white', borderRadius: '9999px', textDecoration: 'none' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book My Strategy Call
          </a>
        </div>
        <p style={{ fontSize: '0.9rem', color: '#aaa' }}>Questions? DM @apothisfontaine or email trust@trustandshield.com</p>
      </div>
    </div>
  );
}