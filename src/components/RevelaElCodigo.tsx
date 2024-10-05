import React from "react";

const Revelacion = () => {


    return (
        <div className="bg-black text-cyan-500 p-3 flex flex-col items-center justify-center">
            <h1>Adivina el Número:</h1>
            <button type= "submit" className="p-3 ml-2 bg-slate-100 rounded">Comenzar Juego</button>
            <form action="" className="p-3 flex flex-col justify-center ">
                <label>Ingrese un número:
                    <input type="" className="m-2 border-solid rounded border-2 border-cyan-500"/>
                </label>
                <button type= "submit" className="p-3 bg-slate-100 rounded">Probar</button>
            </form>
        </div>
    );
};

export default Revelacion;