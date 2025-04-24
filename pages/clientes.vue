<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Gestión de Clientes</h2>
    <form class="bg-white p-4 rounded shadow mb-6 grid grid-cols-2 gap-4">
      <div>
        <label class="block mb-1 font-semibold">Nombre</label>
        <input type="text" class="w-full border rounded p-2" placeholder="Nombre completo"/>
      </div>
      <div>
        <label class="block mb-1 font-semibold">Teléfono</label>
        <input type="text" class="w-full border rounded p-2" placeholder="8888-0000"/>
      </div>
      <div class="col-span-2">
        <label class="block mb-1 font-semibold">Correo electrónico</label>
        <input type="email" class="w-full border rounded p-2" placeholder="cliente@email.com"/>
      </div>
      <div class="col-span-2 text-right">
        <button class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Guardar Cliente</button>
      </div>
    </form>

    <h3 class="text-xl font-semibold mb-2">Lista de Clientes</h3>
    <table class="min-w-full bg-white border rounded shadow overflow-hidden">
      <thead class="bg-blue-100">
      <tr>
        <th class="text-left p-2">Nombre</th>
        <th class="text-left p-2">Teléfono</th>
        <th class="text-left p-2">Correo</th>
        <th class="text-left p-2">Acciones</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="i in 3" :key="i" class="border-t">
        <td class="p-2">María López</td>
        <td class="p-2">8888-0000</td>
        <td class="p-2">maria@email.com</td>
        <td class="p-2">
          <button class="text-blue-600 hover:underline">Editar</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
