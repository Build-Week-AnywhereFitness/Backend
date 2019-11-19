const getClassById = async id => {
    const foundClass = db('classes')
        .where({ id })
        .first();

    const sessions = db('sessions')
        .where({ class_id: id })
        .select('id', 'dateTime');

    let result = await Promise.all([foundClass, sessions]);

    return { ...result[0], sessions: result[1] };
};

const getClassesByUser = id => {
    return db('classes')
        .where({ instructor_id: id })
        .select('id', 'name', 'type', 'location', 'instructor_id');
};