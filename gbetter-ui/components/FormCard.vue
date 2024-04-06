<template>
  <div class="card shrink-0 shadow-1xl bg-base-100">
    <form class="card-body">
      <div class="form-control">
        <label class="label">
          <span class="label-text">Email</span>
        </label>
        <input
          type="email"
          placeholder="email"
          class="input input-bordered"
          required
        />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Password</span>
        </label>
        <input
          type="password"
          placeholder="password"
          class="input input-bordered"
          required
        />
        <label class="label">
          <a href="#" class="label-text-alt link link-hover"
            >Forgot password?</a
          >
        </label>
      </div>
      <div class="form-control mt-6">
        <button class="btn btn-primary">Login</button>
      </div>
    </form>
  </div>
</template>

<script setup>
let props = ["formElements"];
</script>
