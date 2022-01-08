 function Footer(){
     return <footer className="amber darken-4">
             <div className="footer-copyright">
         <div className="container">
         © {new Date().getFullYear()} Bohdan Tkachenko
         <a className="grey-text text-lighten-4 right" href="https://github.com/tkachenkobog">Git</a>
         </div>
       </div>
     </footer>
 }

 export {Footer}