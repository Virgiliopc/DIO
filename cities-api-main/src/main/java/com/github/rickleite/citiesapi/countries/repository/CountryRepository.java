package com.github.rickleite.citiesapi.countries.repository;

import com.github.rickleite.citiesapi.countries.Country;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CountryRepository extends JpaRepository<Country, Long> {
}
