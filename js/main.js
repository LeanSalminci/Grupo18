document.getElementById("header").innerHTML=` 
<div class="nav-crud">
    <div class= "flex">
        <div class="logo">
            <a href="../index.html"><b>OdoIntegral</b></a>
        </div>
        <nav id="nav" >
            <ul>
                <li><a href="../index.html">Inicio</a></li>
                <li><a href="../pages/productosO.html">Productos </a></li>
                <li><a href="../pages/producto_nuevo.html" >Crear</a></li>

            </ul>
        </nav>
        <div class="nav-responsive" onclick="mostrarOcultarMenu()">
            <i class="fa-solid fa-bars"></i>
        </div>

    </div>
</div>
`