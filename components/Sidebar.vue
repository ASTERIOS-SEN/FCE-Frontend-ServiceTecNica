<template>
  <div class="h-screen z-0 w-64 bg-blue-800 text-white top-0 left-0 flex flex-col">
    <div class="p-4 text-xl font-bold border-b border-blue-700">
      ServiceTecNica
    </div>
    <nav class="flex-1 p-4">
      <ul class="space-y-2">
        <li>
          <NuxtLink to="/" class="block px-4 py-2 rounded hover:bg-blue-700" active-class="bg-blue-700">
            Inicio
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/ventas" class="block px-4 py-2 rounded hover:bg-blue-700" active-class="bg-blue-700">
            Ventas
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/caja" class="block px-4 py-2 rounded hover:bg-blue-700" active-class="bg-blue-700">
            Caja
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/clientes" class="block px-4 py-2 rounded hover:bg-blue-700" active-class="bg-blue-700">
            Clientes
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>
