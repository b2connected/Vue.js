<<template>
    <div>
        <input v-model="writer" placeholder="글쓴이"/>
        <input v-model="title" placeholder="제목"/>
        <textarea v-model="content" placeholder="내용"/>
        <!--작성 버튼을 누르면 write함수 실행-->
        <button @click="write">작성</button>
    </div>
</template>
<script>
import data from '@/data' // data불러옴

export default {
    name: 'Create',
    data() { 
        return {
            data: data,
            // v-model로 양방향 통신을 하도록
            writer: "", 
            title: "",
            content: "" 
        }
    },
    methods: {
        write() {  // write 함수
            this.data.push({ // 데이터의 배열에 객체를 push
                writer: this.writer,
                title: this.title,
                content: this.content
            })
            this.$router.push({ // 작성되면 read(메인)화면으로 돌아감
                path: '/'
            })
        }
    }
}
</script>
