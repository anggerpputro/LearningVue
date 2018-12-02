<template>
    <div class="form-group clearfix">
        <label>Fullname:</label>
        <div class="form-group">
            <div class="col-sm-6">
                <input type="text" class="form-control" :value="firstName" @input="nameChanged(true, $event)" placeholder="First Name">
            </div>
            <div class="col-sm-6">
                <input type="text" class="form-control" :value="lastName" @input="nameChanged(false, $event)" placeholder="Last Name">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['value'],
    computed: {
        firstName() {
            let splited = this.value.split(" ");
            return (splited[0] != undefined) ? splited[0] : '';
        },
        lastName() {
            let splited = this.value.split(" ");
            return (splited[1] != undefined) ? splited[1] : '';
        },
    },
    methods: {
        generateFullname(firstName, lastName) {
            return firstName + ' ' + lastName;
        },
        nameChanged(isFirst, event) {
            let fullname = '';
            if(isFirst) {
                fullname = this.generateFullname(event.target.value, this.lastName);
            } else {
                fullname = this.generateFullname(this.firstName, event.target.value);
            }
            this.$emit('input', fullname);
        }
    }
}
</script>

