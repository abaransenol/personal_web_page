import { onMounted, ref } from "vue"

export function useScrollAnimation() {
    const isSectionVisible = ref(false)
    const sectionRef = ref()
    onMounted(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    isSectionVisible.value = true
                    observer.unobserve(entry.target)
                }
            })
        }, {
            threshold: 0.33
        })

        observer.observe(sectionRef.value)
    })

    return { sectionRef, isSectionVisible } 
}