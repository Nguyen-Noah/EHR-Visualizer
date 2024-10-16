export const MongoQueryCompareOps = {
    EQ: "$eq",
    GT: "$gt",
    GTE: "$gte",
    LT: "$lt",
    LTE: "$lte",
    NE: "$ne",
    IN: "$in",
    NIN: "$nin"
};

export const MongoQueryLogicOps = {
    AND: "$and",
    OR: "$or",
    NOT: "$not",
    NOR: "$nor",
    
};

export const MongoQueryElementOps = {
    EXISTS: "$exists",
    TYPE: "$type"
};