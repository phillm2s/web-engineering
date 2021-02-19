(module
 (table 0 anyfunc)
 (memory $0 1)
 (export "memory" (memory $0))
 (export "isPrim" (func $isPrim))
 (func $isPrim (; 0 ;) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (block $label$0
   (br_if $label$0
    (i32.lt_s
     (get_local $0)
     (i32.const 2)
    )
   )
   (set_local $1
    (i32.shr_u
     (get_local $0)
     (i32.const 1)
    )
   )
   (set_local $2
    (i32.const 1)
   )
   (loop $label$1
    (br_if $label$0
     (i32.eqz
      (i32.rem_s
       (get_local $0)
       (i32.add
        (get_local $2)
        (i32.const 1)
       )
      )
     )
    )
    (br_if $label$1
     (i32.le_s
      (tee_local $2
       (i32.add
        (get_local $2)
        (i32.const 1)
       )
      )
      (get_local $1)
     )
    )
   )
   (return
    (i32.const 1)
   )
  )
  (i32.const 0)
 )
)
