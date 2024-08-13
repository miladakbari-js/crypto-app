import styles from './Layout.module.css'

function Layout({children}) {
  return (
   <>
   <header className={styles.header}>
    <h1>Welcome to Crypto App</h1>
    <p>React.js full course</p>
   </header>
   {children}
   <footer className={styles.footer}>
    <p>Developed by Milad Akbari</p>
    <span>✉ milad.akbari.codevelop@gmail.com</span>
   </footer>
   </>
)}

export default Layout