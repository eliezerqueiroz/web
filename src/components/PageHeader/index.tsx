import React from 'react';
import {Link} from 'react-router-dom'
import backIcon from '../../assets/images/icons/back.svg'
import logoImg from '../../assets/images/blackedin_logo.svg'

import '../PageHeader/style.css'

interface PageHeaderProps{
    title: string;
    description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return(
        <header className="page-header">
        <div className="top-bar-container">
            <Link to="/">
                <img src={backIcon} alt="Voltar"/>
            </Link>

            <img src={logoImg} alt="BlackedinLogo"/>
        </div>


        <div className="header-content">
            <strong> {props.title} </strong>
             <p>{props.description}</p>
            {props.children}
        </div>

       
    </header>
    )
}

export default PageHeader;