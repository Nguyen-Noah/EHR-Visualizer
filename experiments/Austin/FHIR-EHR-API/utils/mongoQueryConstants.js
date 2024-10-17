export const MongoCompareOps = {
    EQ: "$eq",
    GT: "$gt",
    GTE: "$gte",
    LT: "$lt",
    LTE: "$lte",
    NE: "$ne",
    IN: "$in",
    NIN: "$nin"
};

export const MongoLogicOps = {
    AND: "$and",
    OR: "$or",
    NOT: "$not",
    NOR: "$nor",
    
};

export const MongoElementOps = {
    EXISTS: "$exists",
    TYPE: "$type"
};

export const MongoArrayOps = {
    ALL: "$all",
    ELEM_MATCH: "$elemMatch",
    SIZE: "$size"
};