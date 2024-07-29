import './footer.css'; // Adjust the path if needed


export default function Footer() {
  return (
    <div className="footer">
      <h2>PlayPulse</h2>
      <p>&copy; {new Date().getFullYear()} PlayPulse. All rights reserved.</p>
    </div>
  )
}
