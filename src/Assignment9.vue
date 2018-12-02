<template>
    <div class="container">
        <h2 class="text-center">Assignment 8: Form Input</h2>

        <hr>

        <div class="row">
            <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <form v-if="!submitted">
                    <!-- <div class="form-group">
                        <label for="fullname">Fullname:</label>
                        <input type="text" class="form-control" v-model.lazy="userData.fullname">
                    </div> -->
                    <comp-fullname-input v-model="userData.fullname"></comp-fullname-input>

                    <div class="form-group">
                        <label for="mail">Email:</label>
                        <input type="email" class="form-control" v-model.lazy="userData.email">
                    </div>
                    <div class="form-group">
                        <label for="password">Password:</label>
                        <input type="password" class="form-control" v-model.lazy="userData.password">
                    </div>
                    <div class="form-group">
                        <label for="saveToDatabase">Save to Database?</label>
                        <div>
                            <label class="radio-inline"><input type="radio" value="true" v-model="saveToDatabase">Yes</label>
                            <label class="radio-inline"><input type="radio" value="false" v-model="saveToDatabase">No</label>
                        </div>
                    </div>

                    <hr>
                    
                    <button class="btn btn-primary" @click.prevent="submitData">Submit!</button>
                    <button class="btn btn-warning" @click.prevent="resetData">Reset!</button>
                </form>

                <hr>

                <div class="panel panel-default" v-if="submitted">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>

                    <div class="panel-body">
                        <table class="table table-hover table-striped">
                            <tbody>
                                <tr>
                                    <th>Fullname</th>
                                    <td>:</td>
                                    <td>{{ userData.fullname }}</td>
                                </tr>
                                <tr>
                                    <th>Email</th>
                                    <td>:</td>
                                    <td>{{ userData.email }}</td>
                                </tr>
                                <tr>
                                    <th>Password</th>
                                    <td>:</td>
                                    <td>{{ userData.password }}</td>
                                </tr>
                                <tr>
                                    <th>Save to Database</th>
                                    <td>:</td>
                                    <td>{{ saveToDatabase }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CompFullnameInput from './components/Assignment9/FullnameInput.vue';

function initialData() {
    return {
        userData: {
            fullname: '',
            email: '',
            password: '',
        },
        saveToDatabase: false,
        saveData: false,
        submitted: false,
    }
}

export default {
    components: {
        compFullnameInput: CompFullnameInput
    },
    data() {
        return initialData();
    },
    methods: {
        submitData() {
            this.submitted = true;
        },
        resetData() {
            Object.assign(this.$data, initialData());
        }
    }
}
</script>
