document.querySelector('.submit-btn').addEventListener('click', function() {
    // 创建一个对象来存储所有答案
    let formData = {
        // 基本信息
        "您的学号+姓名是": document.querySelector('input[placeholder="请输入学号+姓名"]').value,
        "您的手机号是": document.querySelector('input[placeholder="请输入手机号码限大陆地区"]').value,
        "您的年龄介于": document.querySelector('input[name="age"]:checked')?.parentElement.textContent.trim(),
        "您的学历": document.querySelector('input[name="education"]:checked')?.parentElement.textContent.trim(),
        "您的职业为": document.querySelector('input[name="occupation"]:checked')?.parentElement.textContent.trim(),
        
        // 财务状况
        "在您年年的家庭可支配收入中，可用于金融投资（储蓄存款除外）的比例为": document.querySelector('input[name="investment-ratio"]:checked')?.parentElement.textContent.trim(),
        "您的家庭可支配年收入为（折合人民币）": document.querySelector('input[name="annual-income"]:checked')?.parentElement.textContent.trim(),
        
        // 投资知识
        "您的证券投资知识可描述为": document.querySelector('input[name="investment-knowledge"]:checked')?.parentElement.textContent.trim(),
        
        // 投资经验
        "您的证券投资经验可描述为": document.querySelector('input[name="investment-experience"]:checked')?.parentElement.textContent.trim(),
        "您有多少年投资基金、股票、信托、私募证券或金融衍生产品等风险投资品的经验": document.querySelector('input[name="investment-years"]:checked')?.parentElement.textContent.trim(),
        
        // 投资目标
        "您计划的投资期限是多久": document.querySelector('input[name="investment-period"]:checked')?.parentElement.textContent.trim(),
        "您的投资目的是": document.querySelector('input[name="investment-purpose"]:checked')?.parentElement.textContent.trim(),
        
        // 风险偏好
        "以下哪项描述最符合您的投资态度": document.querySelector('input[name="risk-attitude"]:checked')?.parentElement.textContent.trim(),
        "假设有两种投资：投资A预期获得5%的收益，可能承担的损失非常小；投资B预期获得20%的收益，但可能承担较大亏损。您会怎么支配您的投资": document.querySelector('input[name="investment-choice"]:checked')?.parentElement.textContent.trim(),
        "您认为自己能承受的最大投资损失是多少": document.querySelector('input[name="max-loss"]:checked')?.parentElement.textContent.trim()
    };

    // 检查是否所有必填项都已填写
    let allFilled = true;
    for (let key in formData) {
        if (!formData[key]) {
            allFilled = false;
            break;
        }
    }

    if (!allFilled) {
        alert('请填写所有必填项！');
        return;
    }

    // 创建并下载JSON文件
    const formattedData = {};
    let counter = 1; // 初始化序号计数器
    for (let key in formData) {
        // 为每个键添加序号
        const numberedKey = `${counter}、${key}`; 
        formattedData[numberedKey] = {
            "您的选项是": formData[key]
        };
        counter++; // 序号递增
    }
    
    const jsonString = JSON.stringify(formattedData, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = '问卷调查结果.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});