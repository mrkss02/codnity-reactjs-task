import React, { useEffect, useState } from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";

export default function About() {
    interface Person {
        id: number;
        name: string;
        email: string;
        company: {
            catchPhrase: string;
        };
    }

    const [people, setPeople] = useState<Person[]>([]);

    useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data: Person[]) => {
        const arr: Person[] = [];
        for (let i = 0; i < 8; i++) {
            arr.push(data[i]);
        }
        setPeople(arr);
        });
    }, []);

    {/* Inexistent company from random generators */}
    const siteInfo = {
        name: "Weimann, Kuhic and Thompson",
        email: "stanton.rolfson@spinka.com",
        phone: "+1 (505) 644 9069",
        address: "1815 Pretty View Lane, Calistoga, 94515",
        description: "\"Orchestrate Cross-Platform Users\""
    };

    return (
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: 1200, mx: "auto" }}>
        {/* Site info */}
        <Box sx={{ mb: 6, textAlign: "center" }}>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
            About {siteInfo.name}
            </Typography>
            <Typography variant="h4" sx={{ mb: 1 }}>
            {siteInfo.description}
            </Typography>
            <Typography variant="body1">{siteInfo.email}</Typography>
            <Typography variant="body1">{siteInfo.phone}</Typography>
            <Typography variant="body2">{siteInfo.address}</Typography>
        </Box>

        {/* Team */}
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
        Our Team
        </Typography>

        {people.map((person) => (
        <Card sx={{ mb: 3 }}>
            <CardContent>
            <Typography variant="h5">{person.name}</Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {person.email}
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
                "{person.company.catchPhrase}"
            </Typography>
            </CardContent>
        </Card>
        ))}
    </Box>
    );
}