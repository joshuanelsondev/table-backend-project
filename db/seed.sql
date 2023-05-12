\c thetabledb;

CREATE EXTENSION IF NOT EXISTS pgcrypto;


INSERT INTO users (name, email, username, password, is_vegan, restrictions, date_joined)
VALUES 
 ('Alice', 'alice@example.com', 'alice', crypt('password1', gen_salt('bf')), false, '{}', '2022-01-01'),
 ('Bob', 'bob@example.com', 'bob', crypt('password2', gen_salt('bf')), true, '{"gluten", "dairy"}', '2022-01-02'),
 ('Charlie', 'charlie@example.com', 'charlie', crypt('password3', gen_salt('bf')), false, '{}', '2022-01-03');

INSERT INTO dishes (name, calories, is_vegan, category, image_url, portions)
VALUES
('Slow Cooker Pork Carnitas Tacos', 284, false, 'Dinner', 'https://i.pinimg.com/564x/ef/8f/36/ef8f369c3f48dc722c0a998a5e0e95e1.jpg', 4),
('Shakshouka', 479, false, 'Breakfast', 'https://www.foodiesfeed.com/wp-content/uploads/2021/01/hot-shakshuka.jpg', 4),
('Hummus with Bread', 267, true, 'Snack', 'https://images.unsplash.com/photo-1603133872497-f29809b750bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1113&q=80', 8),
('Steak with Chimichurri sauce', 580, false, 'Dinner', 'https://www.foodiesfeed.com/wp-content/uploads/2023/04/delicious-steak-with-herbs-cut-on-slices-1024x683.jpg', 10),
('Red Wine', 130, true, 'Drink', 'https://www.foodiesfeed.com/wp-content/uploads/2016/10/bottles-of-red-wine-1024x683.jpg', 10),
('Spinach Cream Soup', 160, true, 'Lunch', 'https://www.foodiesfeed.com/wp-content/uploads/2018/05/spinach-cream-soup.jpg', 4),
('Ground Beef Rice Bowl', 355, false, 'Dinner', 'https://www.foodiesfeed.com/wp-content/uploads/2017/12/ground-beef-rice-bowl.jpg', 6),
('Jollof Rice', 284, false, 'Dinner', 'https://img.freepik.com/free-photo/closeup-spicy-cooked-rice-with-meat-vegetables-chips-plate-table_181624-34810.jpg?w=1380&t=st=1683681287~exp=1683681887~hmac=282b6f603dd6d637c77f17836e3ed86f56006d92e9e3824119f883356abdafdc', 8);

INSERT INTO user_dishes (user_id, dish_id, type)
VALUES
 (1, 1, 'favorite'),
 (1, 3, 'disliked'),
 (2, 1, 'disliked'),
 (2, 2, 'favorite'),
 (2, 3, 'favorite'),
 (3, 2, 'disliked');

