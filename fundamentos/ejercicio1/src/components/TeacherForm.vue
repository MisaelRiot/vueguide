<script lang="ts" setup>
import { Ref, ref } from 'vue';

interface ITeacher {
    teacherName: string,
    surname: string,
    dni: string,
    subjects: Array<String>,
    doc: boolean
};

let teacher: Ref<ITeacher> = ref({
    teacherName: '',
    surname: '',
    dni: '',
    subjects: [],
    doc: false
});

let teachers: Ref<Array<ITeacher>> = ref([]);

let subject: Ref<string> = ref('');

const addSubject = () => {
    teacher.value.subjects.push(subject.value);
    subject.value = '';
};

const addTeacher = () => {
    // enviar un objeto no reactivo al que
    // se le asignan los valores del objeto reactivo.
    // este error es muy comun, se necesita saber como funciona
    // la reactividad por dentro.
    teachers.value.push({
        teacherName: teacher.value.teacherName,
        surname: teacher.value.surname,
        dni: teacher.value.dni,
        subjects: teacher.value.subjects,
        doc: teacher.value.doc
    });
    teacher.value.teacherName = '';
    teacher.value.surname = '';
    teacher.value.dni = '';
    teacher.value.subjects = [];
    teacher.value.doc = false;
}

</script>

<template>
    <section>
        <h3>Add teacher</h3>
        <div>
            <label>Name:</label>
            <input type="text" v-model="teacher.teacherName" />
        </div>
        <div>
            <label>Lastname:</label>
            <input type="text" v-model="teacher.surname"/>
        </div>
        <div>
            <label>DNI / NIF:</label>
            <input type="text" v-model="teacher.dni" />
        </div>
        <div>
            <label>Subjects:</label>
            <input type="text" v-model="subject"/>
            <button @click="addSubject()">Add</button>
        </div>
        <div>
            <ul>
                <li v-for="(subje, index) in teacher.subjects" :key="index">{{ subje }}</li>
            </ul>
        </div>
        <input type="checkbox" v-model="teacher.doc"/> Docs submitted
        <button @click="addTeacher()">Add</button>
    </section>

    <section>
        <h3>Teacher List</h3>
        <table>
            <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>DNI</th>
                <th>Subjects</th>
                <th>Documentation</th>
            </tr>
            <tr v-for="elm in teachers" :key="elm.dni">
                <th>{{ elm.teacherName }}</th>
                <th>{{ elm.surname }}</th>
                <th>{{ elm.dni }}</th>
                <th>
                    <ul>
                        <li v-for="(item, index) in elm.subjects" :key="index">{{ item }}</li>
                    </ul>
                </th>
                <th v-if="elm.doc">Submitted</th>
                <th v-else>Pending</th>
            </tr>
        </table>
    </section>
</template>

<style scoped></style>