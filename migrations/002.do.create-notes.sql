CREATE TABLE IF NOT EXISTS notes (
    id INTEGER GENERATED BY DEFAULT AS IDENTITY,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    date_created TIMESTAMP NOT NULL DEFAULT now(),
    folder_id INTEGER REFERENCES 
    folders(id) ON DELETE CASCADE NOT NULL    
);