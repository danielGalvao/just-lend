import React from 'react'

export default props => (
   <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
       <div className="container">
           <div className="navbar-header">
               <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                   <span className="sr-only">Toggle navigation</span>
                   <span className="icon-bar"></span>
                   <span className="icon-bar"></span>
                   <span className="icon-bar"></span>
               </button>
               <a className="navbar-brand" href="#">JUST. Lend</a>
           </div>
           <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
               <ul className="nav navbar-nav">
                   <li>
                       <a href="#/lend">Encontre</a>
                   </li>
                   <li>
                       <a href="#/add">Cadastre</a>
                   </li>
               </ul>
           </div>
       </div>
   </nav>
)