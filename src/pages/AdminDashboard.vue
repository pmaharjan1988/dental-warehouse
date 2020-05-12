<template>
  <q-page padding>
    Admin Dashboard
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card">
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" />
        <q-card-section class="bg-primary text-white">
          <div class="text-h6">Add Products</div>
        </q-card-section>
        <q-separator />
        <q-card-actions align="right">
          <q-btn to="/admin/addproduct" color="primary">Go</q-btn>
        </q-card-actions>
      </q-card>
      <q-card class="my-card">
        <q-img src="https://cdn.quasar.dev/img/parallax1.jpg" />
        <q-card-section class="bg-purple text-white">
          <div class="text-h6">Enquiries</div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn to="/admin/enquiry" color="purple">Go</q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>
<script>
export default
{
  data()
  {
    return {
      
    }
  }
}

</script>
