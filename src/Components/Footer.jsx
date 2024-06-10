import React from "react";

function Footer()
{
    var d = new Date().getFullYear();
    return <footer>
        <p class="copyright">Copyright © {d}</p>
    </footer>
}

export default Footer;