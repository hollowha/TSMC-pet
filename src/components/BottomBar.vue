<template>
    <nav class="bottom-bar">
        <button class="nav-item" @click="navigateTo('Pet')">
            <font-awesome-icon :icon="['fas', 'paw']" class="icon" />
        </button>

        <button class="nav-item" @click="navigateTo('Task')">
            <font-awesome-icon :icon="['fas', 'tasks']" class="icon" />
        </button>

        <button class="nav-item home-btn" @click="navigateTo('Main')">
            <div class="home-icon">
                <font-awesome-icon :icon="['fas', 'home']" class="icon" />
            </div>
        </button>

        <button class="nav-item" @click="navigateTo('Shop')">
            <font-awesome-icon :icon="['fas', 'store']" class="icon" />
        </button>

        <button class="nav-item" @click="navigateTo('Profile')">
            <font-awesome-icon :icon="['fas', 'user']" class="icon" />
        </button>
    </nav>
</template>

<script>
export default {
    methods: {
        navigateTo(page) {
            this.$router.push({ name: page });
        }
    }
};
</script>

<style scoped>
.bottom-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: #2c3e50;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 1000;
}

.nav-item {
    display: flex;
    align-items: center;
    color: white;
    border: none;
    background: none;
    cursor: pointer;
    transition: color 0.3s ease;
}

.nav-item:hover {
    color: #3498db;
}

.icon {
    font-size: 32px;
    /* 調整圖標大小 */
}

.home-btn {
    position: relative;
    bottom: 10px;
}

.home-icon {
    background-color: #3498db;
    border-radius: 50%;
    padding: 20px;
    color: white;
    font-size: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>