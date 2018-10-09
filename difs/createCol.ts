db.collection()
  .insertMany([
    {_id: 'eco01', name: 'Eco 01', parent: 'basic'},
    {_id: 'viva', name: 'Viva', parent: 'basic'},

    { _id: 'astral_color', name: 'Astral color', parent: 'semi_commercial'},
    { _id: 'top', name: 'Top extra', parent: 'semi_commercial'},
  ]);
