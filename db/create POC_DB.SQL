

create table answer(
    answer_id SERIAL PRIMARY KEY NOT NULL,
    answer_text varchar[255] not null,
    current_card_id int not null references cardTree(card_id),
    next_id int not null
);

create table finalAnswer(
    id_final_answer SERIAL PRIMARY KEY NOT NULL,
    crm_field varchar[255] not null,
    crm_sub_field varchar[255] not null,
    crm_question_text varchar[255] not null,
    crm_sub_question varchar[255] not null
    card_id int not null references cardTree(card_id) primary key,

);

create table cardTree(
    card_id int generated always as identity not null,
    card_title varchar[255] not null,
    clicked int,
    ahmash_selected boolean not null
);



