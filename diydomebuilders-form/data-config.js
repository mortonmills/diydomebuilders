

    var tfConfig = {
        base_path: '../tablefilter/',

                    auto_filter: {
            delay: 0 //milliseconds
        },
        // filter types
   
        col_2: "checklist",
   col_3: "checklist",
        col_4: "checklist",
   col_5: "checklist",
           col_6: "checklist",
   col_7: "checklist",
           col_8: "checklist",


        // column types
        col_types: [
            'string', 'string', 'number',
            'string', 'string', 'string'
            
        ],

        // filters and headers position
        filters_row_index: 1,
        headers_row_index: 0,
                        sticky_headers: true,
        state: { types: ['local_storage']},
        popup_filters: false,

        alternate_rows: true,
        rows_counter: true,
        btn_reset: true,
        status_bar: true,
        ignore_diacritics: true,
        no_results_message: true,
        enable_empty_option: false,
        enable_non_empty_option: false,
        loader: false,
        mark_active_columns: false,
        highlight_keywords: false,
        
         // theme
        themes: [{ name: '' }],
        

        // sorting extension
        extensions: [{ name: 'sort' }]
    };
    
  

    
