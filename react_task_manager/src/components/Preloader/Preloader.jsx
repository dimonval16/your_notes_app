import React from "react";
import sPreload from './Preloader.module.css';

export default function Preloader() {
    return (
        <div className={`${sPreload.wrap}`} />
    );
}