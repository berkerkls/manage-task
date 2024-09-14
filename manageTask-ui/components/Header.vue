<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <SharedLinkItem
        href="/dashboard"
        label="ManageT."
        class="btn btn-ghost text-primary text-xl hover:bg-transparent"
      />
    </div>
    <div class="flex-none">
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
          <div class="w-6 rounded-full">
            <FontAwesome :icon="faUser" class="h-5 w-5" />
          </div>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a class="justify-between">
              Profile
              <span class="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { faUser } from "@fortawesome/free-solid-svg-icons";
</script>
