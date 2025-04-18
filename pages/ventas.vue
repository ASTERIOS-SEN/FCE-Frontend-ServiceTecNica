<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Gestión de Ventas</h2>
    <form class="bg-white p-4 rounded shadow mb-6 grid grid-cols-2 gap-4">
      <div>
        <label class="block mb-1 font-semibold">Cliente</label>
        <input type="text" class="w-full border rounded p-2" placeholder="Buscar o ingresar cliente" />
      </div>
      <div>
        <label class="block mb-1 font-semibold">Vehículo</label>
        <input type="text" class="w-full border rounded p-2" placeholder="Placa / Modelo" />
      </div>
      <div class="col-span-2">
        <label class="block mb-1 font-semibold">Productos / Servicios</label>
        <textarea class="w-full border rounded p-2" rows="2" placeholder="Detalle..."></textarea>
      </div>
      <div>
        <label class="block mb-1 font-semibold">Total</label>
        <input type="text" class="w-full border rounded p-2" placeholder="C$ 0.00" />
      </div>
      <div>
        <label class="block mb-1 font-semibold">Método de pago</label>
        <select class="w-full border rounded p-2">
          <option>Efectivo</option>
          <option>Tarjeta</option>
          <option>Transferencia</option>
        </select>
      </div>
      <div class="col-span-2 text-right">
        <button class="bg-blue-600 text-white px-6 py-2 rounded mt-4 hover:bg-blue-700">Registrar Venta</button>
      </div>
    </form>

    <h3 class="text-xl font-semibold mb-2">Ventas recientes</h3>
    <table class="min-w-full bg-white border rounded shadow overflow-hidden">
      <thead class="bg-blue-100">
        <tr>
          <th class="text-left p-2">Fecha</th>
          <th class="text-left p-2">Cliente</th>
          <th class="text-left p-2">Total</th>
          <th class="text-left p-2">Estado</th>
          <th class="text-left p-2">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in 3" :key="i" class="border-t">
          <td class="p-2">2025-04-17</td>
          <td class="p-2">Carlos M.</td>
          <td class="p-2">C$ 1200.00</td>
          <td class="p-2"><span class="text-green-600 font-semibold">Pagada</span></td>
          <td class="p-2">
            <button class="text-blue-600 hover:underline">Ver</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
