
CREATE TABLE IF NOT EXISTS Products (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    operating_system VARCHAR(255),
    processor_clock_speed DECIMAL(5,2),
    processor_cores INT,
    screen_size DECIMAL(4,1),
    screen_resolution VARCHAR(50),
    ram_size INT,
    year INT,
    color_options TEXT
);


INSERT INTO Products (
    name, description, operating_system, processor_clock_speed, processor_cores, 
    screen_size, screen_resolution, ram_size, year, color_options
) VALUES (
    'Apple iPad 10.9 2022 64GB',
    'Bemutatkozik az áttervezett iPad. A vadonatúj iPadet alapjaitól terveztük újra, és négy gyönyörű színben választhatod. Még sokoldalúbb, még intuitívabb és még szórakoztatóbb használni...',
    'Apple iPadOS',
    3.00,
    6,
    10.9,
    '2360 x 1640',
    4,
    2022,
    'Blue, Silver, Red, Green'
);


INSERT INTO Products (
    name, description, operating_system, processor_clock_speed, processor_cores, 
    screen_size, screen_resolution, ram_size, year, color_options
) VALUES (
    'Samsung Galaxy Tab S8 128GB',
    'The Samsung Galaxy Tab S8 offers a smooth 120Hz display and fast performance with the Snapdragon 8 Gen 1 chip.',
    'Android 12, One UI 4.1',
    3.00,
    8,
    11.0,
    '2560 x 1600',
    8,
    2022,
    'Phantom Black, Silver, Pink Gold'
);


INSERT INTO Products (
    name, description, operating_system, processor_clock_speed, processor_cores, 
    screen_size, screen_resolution, ram_size, year, color_options
) VALUES (
    'Microsoft Surface Pro 8 128GB',
    'The Microsoft Surface Pro 8 is a powerful 2-in-1 tablet with a high-resolution display and full Windows 11 experience.',
    'Windows 11',
    3.20,
    4,
    13.0,
    '2880 x 1920',
    8,
    2021,
    'Platinum, Graphite'
);


INSERT INTO Products (
    name, description, operating_system, processor_clock_speed, processor_cores, 
    screen_size, screen_resolution, ram_size, year, color_options
) VALUES (
    'Lenovo Tab P11 Pro 128GB',
    'Lenovo Tab P11 Pro offers an immersive OLED display, great sound system, and powerful performance for work and entertainment.',
    'Android 10',
    2.96,
    8,
    11.5,
    '2560 x 1600',
    6,
    2020,
    'Slate Grey'
);


INSERT INTO Products (
    name, description, operating_system, processor_clock_speed, processor_cores, 
    screen_size, screen_resolution, ram_size, year, color_options
) VALUES (
    'Huawei MatePad Pro 128GB',
    'Huawei MatePad Pro features a large 10.8-inch display with a Kirin 990 chipset for excellent performance.',
    'HarmonyOS',
    2.86,
    8,
    10.8,
    '2560 x 1600',
    6,
    2020,
    'Midnight Grey, Pearl White'
);


INSERT INTO Products (
    name, description, operating_system, processor_clock_speed, processor_cores, 
    screen_size, screen_resolution, ram_size, year, color_options
) VALUES (
    'Amazon Fire HD 10 64GB',
    'The Amazon Fire HD 10 is a budget-friendly tablet with a 10.1-inch 1080p display and great for entertainment on a budget.',
    'Fire OS 7',
    2.00,
    8,
    10.1,
    '1920 x 1200',
    3,
    2021,
    'Black, Denim, White'
);
