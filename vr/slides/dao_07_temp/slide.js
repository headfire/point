function loadedSlideGetParam() { 
    var param = Object(); 
    param.isDesk = true; 
    param.isAxis = true; 
    param.scaleA = 5; 
    param.scaleB = 1; 
    param.deskDX = 0; 
    param.deskDY = 0; 
    param.deskDZ = -60; 
    return param;
}

function loadedSlideMake(slidePath) { 
    zdeskXShape('exp_001_shape', 0x6464ff, 0x333333, 0.9, 1);
    zdeskXShape('exp_002_shape', 0xff6464, 0x333333, 0.9, 1);
    zdeskXShape('exp_003_shape', 0x646464, 0x333333, 0.9, 1);
}
