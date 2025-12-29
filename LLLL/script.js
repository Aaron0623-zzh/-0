// 滚动到指定部分
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// 搜索内容并跳转
function searchContent() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const sections = {
        '美食': 'food',
        '美餐（可都跳转到美食）': 'food',
        '吃的（可都跳转到美食）': 'food',
        '旅游景点': 'scenery',
        '景点（可都跳转到旅游景点）': 'scenery',
        '历史': 'history',
        '过往（可都跳转到历史）': 'history',
        '历史人物': 'figures',
        '人物': 'figures'
    };
    const sectionId = sections[searchInput];
    if (sectionId) {
        scrollToSection(sectionId);
    } else {
        alert('未找到相关内容，请重新搜索。');
    }
}