import React from 'react'

const menuItems = []

export default function navbar() {
    return (
        <nav class="navbar" role="navigation">
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar">
                <span aria-hidden="true"></span>
            </a>
            <div id="navbar" class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item">Home</a>
                </div>
            </div>
        </nav>
    )
}
