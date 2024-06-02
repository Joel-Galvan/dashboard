import { useState } from "react";
import { Card, List, ListItem } from '@tremor/react';

export default function Contenido({userName}) {
    const [presupuesto, setPresupuesto] = useState('');
    const [gasto, setGasto] = useState('');
    const [totalPresupuesto, setTotalPresupuesto] = useState(0);
    const [totalGastos, setTotalGastos] = useState(0);
    const [transacciones, setTransacciones] = useState([]);

    const handlePresupuestoChange = (e) => {
        setPresupuesto(e.target.value);
    };

    const handleGastoChange = (e) => {
        setGasto(e.target.value);
    };

    const handlePresupuestoSubmit = (e) => {
        e.preventDefault();
        const nuevoTotalPresupuesto = totalPresupuesto + parseInt(presupuesto);
        setTotalPresupuesto(nuevoTotalPresupuesto);
        setPresupuesto('');
        const nuevaTransaccion = { nombre: 'Juan', cantidad: `+${presupuesto}` };
        setTransacciones([...transacciones, nuevaTransaccion]);
    };

    const handleGastoSubmit = (e) => {
        e.preventDefault();
        const nuevoTotalGastos = totalGastos + parseInt(gasto);
        setTotalGastos(nuevoTotalGastos);
        setGasto('');
        const nuevaTransaccion = { nombre: 'Juan', cantidad: `-${gasto}` };
        setTransacciones([...transacciones, nuevaTransaccion]);
    };

    const presupuestoRestante = totalPresupuesto - totalGastos;

    return (
        <main className="flex-1 p-6 overflow-y-auto">
            <div className="max-w-lg mx-auto">
                <h2 className="text-2xl font-bold mb-4">Contenido</h2>
                {/* Formulario para el Presupuesto */}
                <form onSubmit={handlePresupuestoSubmit}>
                    <div className="mb-4">
                        <label htmlFor="presupuesto" className="block text-gray-700">Presupuesto:</label>
                        <input
                            type="number"
                            id="presupuesto"
                            value={presupuesto}
                            onChange={handlePresupuestoChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="Ingresa tu presupuesto"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Agregar Presupuesto
                    </button>
                </form>

                {/* Formulario para el Gasto */}
                <form onSubmit={handleGastoSubmit}>
                    <div className="mb-4">
                        <label htmlFor="gasto" className="block text-gray-700">Gasto:</label>
                        <input
                            type="number"
                            id="gasto"
                            value={gasto}
                            onChange={handleGastoChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="Ingresa tu gasto"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Agregar Gasto
                    </button>
                </form>

                {/* Cards de Tremor */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                    <Card
                        className="mx-auto max-w-xs"
                        decoration="top"
                        decorationColor="indigo"
                    >
                        <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Presupuesto</p>
                        <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">${totalPresupuesto}</p>
                    </Card>

                    <Card
                        className="mx-auto max-w-xs"
                        decoration="top"
                        decorationColor="indigo"
                    >
                        <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Gastos</p>
                        <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">${totalGastos}</p>
                    </Card>

                    <Card
                        className="mx-auto max-w-xs"
                        decoration="top"
                        decorationColor="indigo"
                    >
                        <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Presupuesto Restante</p>
                        <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">${presupuestoRestante}</p>
                    </Card>
                </div>

                {/* Lista de Transacciones */}
                <div className="max-w-md mt-8 overflow-y-auto max-h-80">
                    <h2 className="text-xl font-bold mb-4">Lista de Transacciones</h2>
                    <List>
                        {transacciones.map((transaccion, index) => (
                            <ListItem key={index}>
                                <span>{transaccion.nombre}</span>
                                <span>{transaccion.cantidad}</span>
                            </ListItem>
                        ))}
                    </List>
                </div>
            </div>
        </main>
    );
}
