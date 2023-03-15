﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Moogle_Models.Db_Models
{
    public class UserTheaterRelationship
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public virtual User User { get; set; }
        public string TheaterId { get; set; }
        public virtual Theater Theater { get; set; }
    }
}
