<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Resumen de Caja</h2>
    <div class="grid grid-cols-3 gap-4 mb-6">
      <div class="bg-white p-4 rounded shadow">
        <h3 class="font-semibold">Apertura</h3>
        <p class="text-xl">C$ 500.00</p>
      </div>
      <div class="bg-white p-4 rounded shadow">
        <h3 class="font-semibold">Ingresos</h3>
        <p class="text-xl text-green-600">C$ 2200.00</p>
      </div>
      <div class="bg-white p-4 rounded shadow">
        <h3 class="font-semibold">Egresos</h3>
        <p class="text-xl text-red-600">C$ 300.00</p>
      </div>
    </div>

    <h3 class="text-xl font-semibold mb-2">Registrar Movimiento</h3>
    <form class="bg-white p-4 rounded shadow grid grid-cols-2 gap-4 mb-6">
      <div>
        <label class="block mb-1 font-semibold">Tipo</label>
        <select class="w-full border rounded p-2">
          <option>Ingreso</option>
          <option>Egreso</option>
        </select>
      </div>
      <div>
        <label class="block mb-1 font-semibold">Monto</label>
        <input type="text" class="w-full border rounded p-2" placeholder="C$ 0.00" />
      </div>
      <div class="col-span-2">
        <label class="block mb-1 font-semibold">Descripción</label>
        <input type="text" class="w-full border rounded p-2" placeholder="Motivo del movimiento" />
      </div>
      <div class="col-span-2 text-right">
        <button class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Agregar Movimiento</button>
      </div>
    </form>

    <h3 class="text-xl font-semibold mb-2">Movimientos del Día</h3>
    <table class="min-w-full bg-white border rounded shadow overflow-hidden">
      <thead class="bg-blue-100">
        <tr>
          <th class="text-left p-2">Hora</th>
          <th class="text-left p-2">Tipo</th>
          <th class="text-left p-2">Monto</th>
          <th class="text-left p-2">Descripción</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in 3" :key="i" class="border-t">
          <td class="p-2">10:30 AM</td>
          <td class="p-2">Ingreso</td>
          <td class="p-2 text-green-600">C$ 500.00</td>
          <td class="p-2">Pago de cliente</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
