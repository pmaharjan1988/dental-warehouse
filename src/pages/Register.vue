<template>
	<q-page class="register-bg">
		<div class="q-pa-md ">
			<div class="login-main absolute-center">
				<q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md ">
					<q-card class="q-pa-md card-top-border ">
						<div class="text-h5 text-primary">Register with Dental Warehouse</div>
						<q-separator class="mtt-20 mbb-20" />
						<q-input autofocus filled flat class="mtt-10 " type="text" v-model="form.name" label="Full Name *" lazy-rules :rules="[
        		val => val && val.length > 0 || 'Please Enter Full Name']" />
						<q-input filled class="mtt-10" v-model="form.email" label="Email *" type="email" lazy-rules :rules="[ val => val && val.length > 0 || 'Please Enter Email']" />
						<q-input filled class="mtt-10" type="password" v-model="form.password" label="Password *" lazy-rules :rules="[
        		val => val && val.length > 0 || 'Please Enter Password']" />
						<q-input filled class="mtt-10" type="password" v-model="form.repeat_password" label="Repeat Password *" error-message="Password & Confirm Password must match" :error="!confirmPassword" lazy-rules :rules="[
        		val => val && val.length > 0 || 'Please Enter repeat Password']" />
						<q-input filled class="mtt-10 " type="text" v-model="form.mobile" label="Mobile Number *" lazy-rules :rules="[
        		val => val && val.length > 0 || 'Please Enter Mobile Number']" />
						<div class="flex justify-end">
							<q-btn label="Submit" :loading="loading" type="submit" color="primary" />
							<q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
						</div>
					</q-card>
				</q-form>
			</div>
		</div>
	</q-page>
</template>
<script>
export default
{
	data()
	{
		return {
			form:
			{
				name: null,
				email: null,
				password: '',
				repeat_password: '',
				mobile: null,
			},
			loading: false,
		}
	},
	methods:
	{
		onSubmit()
		{},

		onReset()
		{
			this.form.email = null
			this.form.password = null
		},
	},
	computed:{
		confirmPassword()
		{
			return this.form.password == this.form.repeat_password;
		}
	}
};

</script>
