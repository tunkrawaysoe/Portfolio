const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} Tun Kraway Soe. All rights reserved.</p>
      
    </footer>
  );
};

const footerStyle = {
  
  color: "black",
  textAlign: "center",
  padding: "1rem",

};

const linkContainerStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "1rem",
};

export default Footer;
